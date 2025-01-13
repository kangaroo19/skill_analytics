export default function PageHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className="font-spoqa-regular text-lg pt-2">{children}</h1>;
}
