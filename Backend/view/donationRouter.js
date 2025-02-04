import express from "express";
import {addDonation,getTotalDonations}  from "../controller/donationController.js";
const router=express.Router();
router.post("/donate",addDonation);
router.post("/getAmount",getTotalDonations);
export default router;