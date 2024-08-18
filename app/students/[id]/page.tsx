import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
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
    combination: '22-31-15',
    lockers: [
      {
        year: 2025,
        number: 334,
        floor: 2,
        status: 'Ready'
      },
      {
        year: 2024,
        number: 429,
        floor: 1,
        status: 'Ready'
      },
      {
        year: 2024,
        number: 428,
        floor: 1,
        status: 'Ready'
      },
      {
        year: 2023,
        number: 7,
        floor: 1,
        status: 'Ready'
      }
    ],
    classes: [
      {
        year: 2025,
        grade: 9,
        letter: 'b'
      },
      {
        year: 2024,
        grade: 9,
        letter: 'c'
      },
      {
        year: 2023,
        grade: 8,
        letter: 'f'
      },
      {
        year: 2022,
        grade: 7,
        letter: 'f'
      }
    ]
  };

  return (
    <>
      <Title>
        {data.lastName}, {data.firstName}
      </Title>
      <div className="flex gap-5">
        <Card title={'Class'}>
          <p className="text-5xl font-bold text-center">{data.class}</p>
        </Card>

        <Card title={'Locker'}>
          <p className="text-5xl font-bold text-center">{data.locker}</p>
        </Card>

        <Card title={'Lock'}>
          <p className="text-5xl font-bold text-center">{data.lock}</p>
        </Card>

        <Card title={'Combination'}>
          <p className="text-5xl font-bold text-center">{data.combination}</p>
        </Card>

        <Card title={'Membership Status'}>
          <p className="text-5xl font-bold text-center">Verified</p>
        </Card>
      </div>

      <Title>History</Title>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card title={'Lockers'}>
          {data.lockers.map((v, i) => (
            <div key={i} className="flex">
              <p className="w-1/4">{v.year}</p>
              <p className="w-1/4">#{v.number}</p>
              <p className="w-1/4">Floor {v.floor}</p>
              <p className="w-1/4">{v.status}</p>
            </div>
          ))}
        </Card>

        <Card title={'Locks'}></Card>

        <Card title={'Classes'}>
          {data.classes.map((v, i) => (
            <div key={i} className="flex">
              <p className="w-1/2">{v.year}</p>
              <p className="w-1/2">
                {v.grade}
                {v.letter}
              </p>
            </div>
          ))}
        </Card>

        <Card title={'Membership'}></Card>
      </div>
    </>
  );
}
