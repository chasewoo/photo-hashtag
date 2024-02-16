import { fetchPhotos } from "@/utils/fetch-photos";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest) {
  if (!req.url) {
    throw new Error("Did not find url");
  }
  const url = new URL(req.url);
  const offset = getSearchParam(url, "offset", 0);
  const limit = getSearchParam(url, "limit", 9);

  const rows = await fetchPhotos(limit, offset);
  return Response.json(rows);
}

const getSearchParam = (
  url: URL,
  key: "offset" | "limit",
  defaultValue: number
): number => {
  const value = url.searchParams.get(key);
  return value ? parseInt(value) : defaultValue;
};
