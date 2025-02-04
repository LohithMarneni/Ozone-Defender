import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: false, 
    },
    plants: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ["debit", "credit", "gpay"],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Donation = mongoose.model("donate", donationSchema);

// Function to get total donation amount by a user
export const getTotalDonationsByEmail = async (email) => {
    try {
        const donations = await Donation.find({ email });
        const totalDonated = donations.reduce((total, donation) => total + donation.amount, 0);
        return { totalDonated, donations, email };
    } catch (error) {
        console.error("Error fetching donations: ", error);
        throw error;
    }
};

export default Donation;
