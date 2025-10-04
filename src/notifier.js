export function sendNotification(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("Invalid payload: must be an object");
  }

  if (!payload.task_id) {
    throw new Error("Invalid payload: task_id is required");
  }

  console.log(
    `📩 Notificación: La tarea ${payload.task_id} del proyecto ${payload.project_id} fue completada por el usuario ${payload.completed_by} (${payload.timestamp})`
  );

  return true;
}
