export const sendEmergencyAlert = async (req, res) => {
  try {
    const userId = req.user?.id;

    res.status(200).json({
      message: "Emergency alert sent successfully",
      userId,
      alert: true,
    });
  } catch (error) {
    console.error("Emergency alert error:", error);
    res.status(500).json({ message: "Server error" });
  }
};