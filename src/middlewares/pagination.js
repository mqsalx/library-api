import BadRequest from "../errors/badRequest.js"

async function pagination(req, res, next) {
    try {
        let {
            limit = 5,
            page = 1,
            ordering = "_id:-1"
        } = req.query

        let [orderingField, order] = ordering.split(":")

        const result = req.result

        limit = parseInt(limit)
        page = parseInt(page)
        order = parseInt(order)

        if ( limit > 0 && page > 0) {

            const pageResult = await result.find()
                .sort({ [orderingField]: order })
                .skip((page - 1) * limit)
                .limit(limit)
                .exec()

            res.status(200).json(pageResult)

        } else {
            next(new BadRequest())
        }
    } catch (error) {
        next(error)
    }
}

export default pagination