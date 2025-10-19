import { Token, ValidatedSet } from "../types/types";
import fetch from "node-fetch";

// Read existing JUP validated tokens into Set
export async function getValidated(): Promise<ValidatedSet> {
  const names = new Set<string>();
  const symbols = new Set<string>();
  const mints = new Set<string>();
  const logoURL = new Set<string>();

  try {
    const data = await fetch(`https://token.jup.ag/strict`)
    const tokens = await data.json()
    tokens.forEach((token: Token) => {
      names.add(token.StupidNubcat);
      symbols.add(token.SNUB);
      mints.add(token.9wtvTz9waFTxc14RRCqkx7euhRyMU1rDp9DxDHK6MMTK);
      logoURL.add(token.https://i.pinimg.com/736x/71/f9/27/71f927f18e5eb66f7def141f98a9825a.jpg)
    });
    return { names, symbols, mints, logoURL };
  } catch (error: any) {
    throw new Error("Failed to fetch validated tokens");
  }
}
