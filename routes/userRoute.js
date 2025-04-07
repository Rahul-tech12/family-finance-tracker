import express from 'express';
import JWT from 'jsonwebtoken'
import userAuth from '../models/userAuth.js';
import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import transactionModel from '../models/transactionModel.js';
import milestoneModel from '../models/milestoneModel.js';
import accountModel from '../models/accountModel.js';
import categoryModel from '../models/categoryModel.js';


const router=express.Router()

router.post('/register',async(req,res)=>{
    try {
        const {email,password,cnfpassword}=req.body
    if(!email || !password || !cnfpassword){
        res.status(404).send({
            message:'Email and password is required'
        })
    }
    if(password!=cnfpassword){
        res.status(400).send({
            message:'Incorrect password or confirm password'
        })
    }
    const hashedPassword=await hashPassword(password)
    const user=await new userAuth({email,password:hashedPassword,cnfpassword:hashedPassword}).save();
    res.status(200).send({
        message:'User registered successfully',
        user
    })
    } catch (error) {
        res.status(500).send({
            message:'Something went wrong',
            error
        })
        console.log(error)
    }
})

router.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            return res.status(404).send({
                message:'Email and password is required'
            })
        }
        const user=await userAuth.findOne({email})
        if(!user){
            return res.status(404).send({
                message:'Register yourself'
            })
        }
        const compPassword=await comparePassword(password,user.password)
        if(!compPassword){
            return res.status(200).send({
                message:'Incorrect password'
            })
        }
        const token= await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.status(200).send({
            message:'Login successfully',
            user:{
                email:user.email,
                password:user.password,
            },
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:'Something went wrong',
            error
        })
    }
})

router.post('/transaction',async(req,res)=>{
    try {
        const {amount,date,account,category}=req.body
        if(!amount || !date ||!account || !category){
            return res.status(404).send({
                message:'All fields are required'
            })
        }
        const transaction=await new transactionModel({amount,date,account,category}).save()
        return res.status(200).send({
            message:'Transaction done successfully',
            transaction
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:'Something went wrong'
        })
    }
})
router.post('/milestones',async(req,res)=>{
    try {
        const {name,account,curramount,targamount,start,finish}=req.body
        if(!name || !account ||!curramount || !targamount || !start || !finish){
            return res.status(404).send({
                message:'All fields are required'
            })
        }
        const milestone=await new milestoneModel({name,account,curramount,targamount,start,finish}).save()
        return res.status(200).send({
            message:'Milestone added successfully',
            milestone
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:'Something went wrong'
        })
    }
})

router.post('/account',async(req,res)=>{
    try {
        const {accname,balance,currency,acctype,name}=req.body
        if(!name || !accname ||!balance || !currency || !acctype){
            return res.status(404).send({
                message:'All fields are required'
            })
        }
        const account=await new accountModel({accname,balance,currency,acctype,name}).save()
        return res.status(200).send({
            message:'Account created successfully',
            account
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:'Something went wrong'
        })
    }
})

router.post('/category',async(req,res)=>{
    try {
        const {name}=req.body
        if(!name){
            return res.status(404).send({
                message:'Required'
            })
        }
        const category=await new categoryModel({name}).save()
        return res.status(200).send({
            message:'Category created successfully',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:'Something went wrong'
        })
    }
})

router.get('/gettransaction',async(req,res)=>{
    try {
        const data=await transactionModel.find({})
        res.json({
            data
        })
    } catch (error) {
        console.log(error)
    }
})

export default router