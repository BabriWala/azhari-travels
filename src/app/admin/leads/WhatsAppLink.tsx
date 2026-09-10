import { whatsappUrl } from "../../lib/whatsapp";

export default function WhatsAppLink({ phone }: { phone: string }) {
    const href = whatsappUrl(phone);
    return href ? <a className="lw-whatsapp-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open WhatsApp for ${phone}`} title={`WhatsApp +${href.split("/").pop()}`}>WhatsApp +{href.split("/").pop()} ↗</a> : null;
}
