/** @format */

export async function Get() {
  return Response.json({
    currentTime: new Date().toLocaleDateString(),
  });
}
