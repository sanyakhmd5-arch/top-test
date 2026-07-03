export default function sitemap() {
const baseUrl = "https://toptestfood.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/schools`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/partners`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const schoolSlugs = [
    "al-jamiaa-ahliya-kharj",
    "al-fursan-ahliya-kharj",
    "al-risala-ahliya-riyadh",
    "afaq-al-badiya-ahliya-riyadh",
    "riyad-al-uloom-ahliya-riyadh",
    "al-shams-ahliya-riyadh",
    "riyad-najd-ahliya-riyadh",
    "al-manhal-riyadh",
    "al-tarbiya-namudhajiya-riyadh",
    "riyadh-ahliya-riyadh",
    "abi-hurayra-hafr-al-batin",
    "47th-primary-hafr-al-batin",
    "49th-primary-hafr-al-batin",
    "al-rashad-hafr-al-batin",
    "ibn-al-mughira-hafr-al-batin",
    "abi-saeed-al-khudri-hafr-al-batin",
    "amir-sultan-hafr-al-batin",
    "50th-primary-hafr-al-batin",
    "24th-primary-hafr-al-batin",
  ];

  const schoolPages = schoolSlugs.map((slug) => ({
    url: `${baseUrl}/schools/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...schoolPages];
}
