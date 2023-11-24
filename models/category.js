const db = require('./db')

function getAllCategories(callback){
        const sqlQuery = 'SELECT * FROM Categories';
        db.query(sqlQuery, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                callback(result)
            }
        });
}



module.exports = {
    getAllCategories
};