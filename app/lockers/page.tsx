import { Bar } from '@/components/ui/bar';
import { Title } from '@/components/ui/title';

export default function Page() {
  const data = [
    {
      id: 'd1e9f5d6-73d3-4c88-9c33-9b2c5c7f9f2c', // Unique UUID for Benedikt
      firstName: 'Benedikt',
      lastName: 'Winkler',
      locker: '#135'
    },
    {
      id: 'c1a7e2b2-4b1e-4c12-bf93-dc6d7e6a8f61', // Unique UUID for Alice
      firstName: 'Alice',
      lastName: 'Johnson',
      locker: '#142'
    },
    {
      id: 'fa1a1c1b-3ca0-4404-8f3b-d1f1a2e5a4b5', // Unique UUID for Michael
      firstName: 'Michael',
      lastName: 'Smith',
      locker: '#101'
    },
    {
      id: 'bc13e206-0a3e-4e9f-8e25-2f3b7d7b27c2', // Unique UUID for Sophia
      firstName: 'Sophia',
      lastName: 'Davis',
      locker: '#114'
    },
    {
      id: 'e76b5c3d-0ef2-42b9-b8af-1be2e2c7d70e', // Unique UUID for David
      firstName: 'David',
      lastName: 'Brown',
      locker: '#156'
    },
    {
      id: 'c4d6b8ea-8b7f-4fc1-8f7b-4b8b59a9c3d1', // Unique UUID for Emma
      firstName: 'Emma',
      lastName: 'Garcia',
      locker: '#118'
    },
    {
      id: '3a5f8f4f-d7a0-4f25-8f9e-6b19b6c6e5b1', // Unique UUID for James
      firstName: 'James',
      lastName: 'Martinez',
      locker: '#123'
    },
    {
      id: 'f5c6e28b-8927-4c4b-8f6e-9a5f6b1b5a1c', // Unique UUID for Olivia
      firstName: 'Olivia',
      lastName: 'Hernandez',
      locker: '#109'
    },
    {
      id: '1ee2ed7d-1f2e-4f30-b4c6-0a22f96e1f90', // Unique UUID for Isabella
      firstName: 'Isabella',
      lastName: 'Wilson',
      locker: '#145'
    },
    {
      id: 'f8e4cd71-e76b-4b62-b0b5-5f5e7c4f0b3e', // Unique UUID for Liam
      firstName: 'Liam',
      lastName: 'Anderson',
      locker: '#132'
    },
    {
      id: 'b6e230d2-04e3-4d4d-8c62-3f5b9e4f84a7', // Unique UUID for Noah
      firstName: 'Noah',
      lastName: 'Thomas',
      locker: '#127'
    }
  ];

  return (
    <>
      <Title>Lockers</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((v, i) => (
          <Bar
            data={[
              [v.locker, 'w-1/3'],
              [v.lastName + ',', 'w-1/3'],
              [v.firstName, 'w-1/3']
            ]}
            link={'/lockers/' + v.id}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
