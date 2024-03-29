const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
export const getTopics = async () => {
  try {
    if (!apiDomain) return [];
    const res = await fetch(`${apiDomain}/topic`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch topics ...!");
    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};
export const getTopic = async (id) => {
  try {
    const topic = await fetch(`${apiDomain}/topic/${id}`, {
      cache: "no-store",
    });
    if (!topic.ok) throw new Error("Failed to fetch topic ...!");
    return topic.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};
