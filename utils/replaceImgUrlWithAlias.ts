/**
 * Replaces the base URL of an image with a predefined alias.
 *
 * @param img - The original image URL to be modified.
 * @returns The modified image URL with the base URL replaced by the alias.
 */
export default function (img: string): string {
    const url = 'https://api.proshinedetailing.pl/'
    return img.replace(url,'/proshine/');
}