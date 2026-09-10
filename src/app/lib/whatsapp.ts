export function whatsappUrl(value: string) {
    const text = value.trim().replace(/^p:\s*/i, "").replace(/[০-৯]/g, c => String(c.charCodeAt(0) - 0x09e6));
    // Do not turn rounded scientific notation or spreadsheet errors into a wrong contact.
    if (!/^[+\d\s().-]+$/.test(text)) return null;
    let digits = text.replace(/\D/g, "");
    if (digits.startsWith("00")) digits = digits.slice(2);
    if (/^1[3-9]\d{8}$/.test(digits) && !text.startsWith("+") && !text.startsWith("00")) digits = `880${digits}`;
    if (/^01\d{9}$/.test(digits)) digits = `88${digits}`;
    if (!/^[1-9]\d{7,14}$/.test(digits)) return null;
    return `https://wa.me/${digits}`;
}

export function isWhatsappQuestion(question: string) {
    return /whats\s*app|হো[য়য়]াটস|হোয়াটস|হোয়াটস|ওয়াটস|ওয়াটস/i.test(question);
}
