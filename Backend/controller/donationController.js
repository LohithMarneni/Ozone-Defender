import Donation, { getTotalDonationsByEmail } from "../models/donationSchema.js";

// Insert a new donation
export const addDonation = async (req, res) => {
    try {
        const { name, email, plants, amount, payment } = req.body;
        
        if (!name || !email || !plants || !amount || !payment) {
            return res.status(400).json({ message: "All fields are required." });
        }
        
        const newDonation = new Donation({
            name,
            email,
            plants,
            amount,
            paymentMethod: payment,
        });

        await newDonation.save();
        res.status(201).json({ message: "Donation recorded successfully!", donation: newDonation });
    } catch (error) {
        console.error("Error saving donation:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

// Get total donations by email
export const getTotalDonations = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Email is required." });
        }

        const totalDonations = await getTotalDonationsByEmail(email);
        res.status(200).json(totalDonations);
    } catch (error) {
        console.error("Error fetching total donations:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};
