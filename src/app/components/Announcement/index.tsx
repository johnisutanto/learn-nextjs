async function getAnnouncement() {
  console.log(`calling get announcement`);
  const result = await new Promise<{ content: string }>((resolve) =>
    setTimeout(() => resolve({ content: "this is the announcement" }), 2000)
  );
  return result;
}
export default async function Announcement() {
  const announcement = await getAnnouncement();
  return <div>Announcement: {announcement.content}</div>;
}
