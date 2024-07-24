import { Bar } from '@/components/ui/bar';
import { Title } from '@/components/ui/title';

export default function Page() {
  const data = [
    {
      id: 'e80a33c3-1395-4b5f-8522-3f4c75b8c5a0',
      firstName: 'Alice',
      lastName: 'Smith',
      applicationReceived: true,
      depositPaid: false,
      topLocker: true,
      class: '7b',
      locker: '#131',
      lock: 987654321
    },
    {
      id: 'b738d7e9-6b51-4d47-bc68-6c0f6a0af7e5',
      firstName: 'John',
      lastName: 'Doe',
      applicationReceived: true,
      depositPaid: true,
      topLocker: false,
      class: '9a',
      locker: '#102',
      lock: 123456789
    },
    {
      id: 'c3f8b4e4-8d6c-4b4e-8058-2a2d3a5f1b74',
      firstName: 'Emily',
      lastName: 'Brown',
      applicationReceived: false,
      depositPaid: false,
      topLocker: false,
      class: '6d',
      locker: '#311',
      lock: 234567890
    },
    // Add more example student data here
    {
      id: '6d6f7e1a-7c8b-4e95-8c3c-9b5f1b3a4e2d',
      firstName: 'Michael',
      lastName: 'Johnson',
      applicationReceived: true,
      depositPaid: true,
      topLocker: true,
      class: '8c',
      locker: '#215',
      lock: 345678912
    },
    {
      id: '9a2b4c8d-5e6f-7a9b-1c2d-3e4f5a6b7c8d',
      firstName: 'Sophia',
      lastName: 'Martinez',
      applicationReceived: false,
      depositPaid: false,
      topLocker: false,
      class: '6b',
      locker: '#405',
      lock: 456789123
    },
    {
      id: '1e2a3d4c-5b6f-7a8d-9e1b-2c3d4e5f6a7',
      firstName: 'Oliver',
      lastName: 'Garcia',
      applicationReceived: true,
      depositPaid: true,
      topLocker: false,
      class: '9c',
      locker: '#127',
      lock: 567891234
    },
    {
      id: '2b4c8d6e-7f1a-9b2c-4e5f-6a7b8c9d1e2',
      firstName: 'Isabella',
      lastName: 'Rodriguez',
      applicationReceived: true,
      depositPaid: false,
      topLocker: false,
      class: '7a',
      locker: '#302',
      lock: 678912345
    },
    {
      id: '3d4c5b6f-7a8d-9e1b-2c3d-4e5f6a7b8c',
      firstName: 'William',
      lastName: 'Lopez',
      applicationReceived: false,
      depositPaid: false,
      topLocker: true,
      class: '8b',
      locker: '#219',
      lock: 789123456
    }
  ];

  return (
    <>
      <Title>Students</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((v, i) => (
          <Bar
            data={[
              [v.lastName + ',', 'w-1/3'],
              [v.firstName, 'w-1/3'],
              [v.class, 'w-1/6'],
              [v.locker, 'w-1/6']
            ]}
            link={'/students/' + v.id}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
