import Razorpay from "razorpay";

export const createOrder = async (req, res) => {
  try {
    console.log("RAZORPAY_KEY_ID =", process.env.RAZORPAY_KEY_ID);
    console.log("RAZORPAY_KEY_SECRET =", process.env.RAZORPAY_KEY_SECRET);

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return res.status(500).json({
        message: "Razorpay keys missing in .env",
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: 50000,
      currency: "INR",
      receipt: "appointment_receipt",
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay error:", error);
    res.status(500).json({
      message: "Payment failed",
      error: error.message,
    });
  }
};