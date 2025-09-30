export const metadata = {
  title: "SMC Intake • SellMyCybertruck",
  description: "Simple AI intake chat for cash-offer requests."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}