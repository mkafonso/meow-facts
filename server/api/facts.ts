export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch<MeowFactResponse>(
      `https://meowfacts.herokuapp.com?count=10`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch new facts:", error);
    return [];
  }
});

interface MeowFactResponse {
  data: string[];
}
