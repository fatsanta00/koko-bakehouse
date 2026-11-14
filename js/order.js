/**
 * Koko Bakehouse — WhatsApp Order Integration
 *
 * Author: Stephen Bassey (SB)
 * Copyright (c) 2026 Stephen Bassey. All rights reserved.
 *
 * IMPORTANT: Replace WHATSAPP_NUMBER with the real business number before going live.
 * Use international format, digits only — e.g. "2348012345678" for a Nigerian line.
 * The placeholder below is not a real or verified number.
 */

const WHATSAPP_NUMBER = "08000000000"; // ← replace before launch

const ORDER_MESSAGE =
  "Hello Koko Bakehouse! I'd like to place a weekend order. Please share the next steps.";

function buildWhatsAppURL(number, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

const btn = document.getElementById("sb-whatsapp-btn");
if (btn) {
  btn.href = buildWhatsAppURL(WHATSAPP_NUMBER, ORDER_MESSAGE);
}
