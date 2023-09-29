async function getAnnouncement() {
  console.log(`calling get announcement`);
  const res = await fetch("http://localhost:3000/api/announcement");
  return res.json();
}
export default async function Announcement() {
  const announcement = await getAnnouncement();
  return <div>Announcement: {announcement.content}</div>;
}
