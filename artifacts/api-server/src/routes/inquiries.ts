import { Router, type IRouter } from "express";
import { db, inquiriesTable, insertInquirySchema } from "@workspace/db";

const router: IRouter = Router();

router.post("/inquiries", async (req, res) => {
  const parsed = insertInquirySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request", details: parsed.error.issues });
    return;
  }

  try {
    const [inquiry] = await db.insert(inquiriesTable).values(parsed.data).returning();
    req.log.info({ inquiryId: inquiry.id }, "New inquiry saved");
    res.status(201).json({ success: true, id: inquiry.id });
  } catch (err) {
    req.log.error({ err }, "Failed to save inquiry");
    res.status(500).json({ error: "Failed to save inquiry" });
  }
});

export default router;
