import { Card } from '@/components/ui/card';
import { Title } from '@/components/ui/title';

export default function Page() {
  const data = {
    id: 'e80a33c3-1395-4b5f-8522-3f4c75b8c5a0',
    firstName: 'Alice Scarlett',
    lastName: 'Smith Sofia Perez',
    class: '7b',
    locker: '#131',
    lock: 987654321,
    combination: '22-31-15',
    students: [
      {
        year: 2025,
        firstName: 'Jonathan',
        lastName: 'Daily'
      },
      {
        year: 2024,
        firstName: 'Bob',
        lastName: 'Dylan'
      },
      {
        year: 2024,
        firstName: 'Samantha',
        lastName: 'Olfa'
      },
      {
        year: 2023,
        firstName: 'Greer',
        lastName: 'Perry'
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
      <Title>{data.locker}</Title>
      <div className="flex gap-5">
        <Card title={'Student'}>
          <p className="text-3xl font-bold text-center">
            {data.firstName} {data.lastName}
          </p>
        </Card>

        <Card title={'Class'}>
          <p className="text-5xl font-bold text-center">{data.class}</p>
        </Card>

        <Card title={'Lock'}>
          <p className="text-5xl font-bold text-center">{data.lock}</p>
        </Card>

        <Card title={'Combination'}>
          <p className="text-5xl font-bold text-center">{data.combination}</p>
        </Card>
      </div>

      <Title>History</Title>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card title={'Students'}>
          {data.students.map((v, i) => (
            <div key={i} className="flex">
              <p className="w-1/3">{v.year}</p>
              <p className="w-1/3">{v.lastName},</p>
              <p className="w-1/3">{v.firstName}</p>
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
      </div>
    </>
  );
}
