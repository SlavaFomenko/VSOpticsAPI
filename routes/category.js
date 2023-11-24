const express = require('express')
const router = express.Router()
const categoriesModule = require('../models/category')



router.get('/',(req, res)=>{
    categoriesModule.getAllCategories((categories)=>{
        res.json(categories)
    })
})

router.get('/id/:category_id',(req, res)=>{

})

module.exports = router