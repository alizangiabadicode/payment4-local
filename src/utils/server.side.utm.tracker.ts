export async function utmTrackingServerSide(
  utmCampaign?: string,
  utmMedium?: string,
  utmSource?: string
) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/track/utm?${
    utmCampaign ? `utm_campaign=${utmCampaign}` : ""
  }${utmMedium ? `&utm_medium=${utmMedium}` : ""}${
    utmSource ? `&utm_source=${utmSource}` : ""
  }`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  return res.json();
}
