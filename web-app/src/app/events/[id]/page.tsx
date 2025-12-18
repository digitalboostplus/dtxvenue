import TicketClient from "@/components/TicketClient";

export function generateStaticParams() {
    return [{ id: '1' }];
}

export default async function TicketPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <TicketClient id={id} />;
}
