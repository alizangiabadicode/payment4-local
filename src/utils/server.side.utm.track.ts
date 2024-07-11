export async function utmTrackingServerSide(
  utmCampaign?: string,
  utmMedium?: string,
  utmSource?: string
) {
  const url = `${process.env.NEXT_PUBLIC_UTM_ENDPOINT}/track/utm?${
    utmCampaign ? `utm_campaign=${utmCampaign}` : ""
  }${utmMedium ? `&utm_medium=${utmMedium}` : ""}${
    utmSource ? `&utm_source=${utmSource}` : ""
  }`;
  // const formattedUrl =
  //   url.endsWith("&") || url.endsWith("?") ? url.slice(0, -1) : url;
  const res = await fetch(url, {
    cache: "no-store",
  });
  return res.json();
}
