export function bytesToHex(buff?: Uint8Array, skip0x?: boolean): string {
  const bytes: string[] = [];

  if (!buff) return (skip0x ? "" : "0x") + bytes.join("");

  buff.forEach((byte) => {
    const byteString = byte.toString(16);
    bytes.push(byte >= 16 ? byteString : "0" + byteString);
  });

  return (skip0x ? "" : "0x") + bytes.join("");
}

export function hexToBytes(hexString: string): Uint8Array {
  if (!hexString) return new Uint8Array();
  else if (!/^(0x)?[0-9a-fA-F]*$/.test(hexString)) {
    throw new Error("Invalid hex string");
  } else if (hexString.length % 2 !== 0) {
    throw new Error("The hex string has an odd length");
  }

  hexString = strip0x(hexString);
  const bytes = [];
  for (let i = 0; i < hexString.length; i += 2) {
    bytes.push(parseInt(hexString.substring(i, i + 2), 16));
  }
  return Uint8Array.from(bytes);
}

export function strip0x(value: string): string {
  return value.startsWith("0x") ? value.substring(2) : value;
}
