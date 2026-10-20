// Narx qoidalari MyTeam va MyTeam Plus backend'idagidek (apps/billing/pricing.py, 0002_prices, 0003_discounts):
// har bir pog'ona o'z xodimlariga, chegirma davr bo'yicha, QQS ustiga; so'm butun, yarmi yuqoriga yaxlitlanadi.
// Narxlar Django admin'da o'zgarsa, shu yerda ham yangilang.

export const TIERS = [
  { upTo: 20, price: 199_000 },
  { upTo: 50, price: 179_000 },
  { upTo: 100, price: 159_000 },
  { upTo: null, price: 139_000 },
];

export const PERIODS = [
  { months: 1, discount: 5 },
  { months: 3, discount: 10 },
  { months: 6, discount: 20 },
  { months: 12, discount: 50 },
];

export const VAT_PERCENT = 12;
export const MINIMUM_SEATS = 5;

const percentOf = (amount, percent) => Math.round((amount * percent) / 100);

// Bir oylik narx pog'onalar bo'yicha: [{ from: 1, to: 20, seats: 20, price: 199000, amount: 3980000 }, ...]
export function monthlyLines(seats) {
  const lines = [];
  let below = 0;
  for (const tier of TIERS) {
    if (below >= seats) break;
    const top = tier.upTo === null ? seats : Math.min(seats, tier.upTo);
    if (top > below) {
      lines.push({ from: below + 1, to: top, seats: top - below, price: tier.price, amount: (top - below) * tier.price });
      below = top;
    }
  }
  return lines;
}

// `wanted` xodim `months` oyga: kamida MINIMUM_SEATS xodim uchun hisoblanadi
export function quote(wanted, months) {
  const seats = Math.max(wanted, MINIMUM_SEATS);
  const { discount: discountPercent } = PERIODS.find((period) => period.months === months);
  const lines = monthlyLines(seats);
  const monthly = lines.reduce((sum, item) => sum + item.amount, 0);
  const base = monthly * months;
  const discount = percentOf(base, discountPercent);
  const net = base - discount;
  const vat = percentOf(net, VAT_PERCENT);
  const total = net + vat;
  return { seats, months, discountPercent, lines, monthly, base, discount, net, vat, total, perSeatMonth: Math.round(total / seats / months) };
}

// 1234567 -> "1 234 567"
export const formatNumber = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
