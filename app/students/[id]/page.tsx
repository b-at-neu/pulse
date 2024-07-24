import { Badge } from '@/components/ui/badge';
import { Title } from '@/components/ui/title';

export default function Page() {
  const data = {
    id: 'e80a33c3-1395-4b5f-8522-3f4c75b8c5a0',
    firstName: 'Alice Scarlett',
    lastName: 'Smith Sofia Perez',
    applicationReceived: true,
    depositPaid: false,
    topLocker: true,
    class: '7b',
    locker: '#131',
    lock: 987654321,
    combination: '22-31-15'
  };

  return (
    <>
      <div className="lg:flex gap-5">
        <Title>
          {data.lastName}, {data.firstName} ({data.class})
        </Title>

        <div className="flex gap-3 md:gap-5 p-3 flex-wrap text-nowrap">
          <Badge>Locker: {data.locker}</Badge>
          <Badge>Lock: {data.lock}</Badge>
          <Badge>Combination: {data.combination}</Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <div>LOCKERS</div>

        <div>LOCKS</div>

        <div>CLASS</div>

        <div>MEMBERSHIP</div>
      </div>
    </>
  );
}
