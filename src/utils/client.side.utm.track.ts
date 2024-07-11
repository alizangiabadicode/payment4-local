interface UTMResponse {
  success: boolean;
  data: any;
}

export async function utmTrackingClientSide(
  queryParams: string
): Promise<UTMResponse | undefined> {
  if (typeof window === "undefined") {
    console.error("utmTracking can only be run on the client side");
    return;
  }

  const url = `${process.env.NEXT_PUBLIC_UTM_ENDPOINT}/track/utm?${queryParams}`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch UTM tracking data");
  }

  return res.json();
}
