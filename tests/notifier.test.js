import { sendNotification } from "../src/notifier.js";

describe("Notifier", () => {
  it("should send notification with valid payload", () => {
    const payload = {
      task_id: 1,
      project_id: 10,
      completed_by: 5,
      timestamp: "2025-10-04 10:00:00",
    };

    const result = sendNotification(payload);
    expect(result).toBe(true);
  });

  it("should throw error if task_id is missing", () => {
    const payload = { project_id: 10 };
    expect(() => sendNotification(payload)).toThrow(
      "Invalid payload: task_id is required"
    );
  });
});
