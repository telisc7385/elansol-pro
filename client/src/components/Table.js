import React from 'react'
import './Table.css'

const tableData = [
  {
    id: 1,
    avatar: '1.jpg',
    name: 'Michael Holz',
    date: '04/10/2013',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    avatar: '2.jpg',
    name: 'Paula Wilson',
    date: '05/08/2014',
    role: 'Publisher',
    status: 'Active',
  },
  {
    id: 3,
    avatar: '3.jpg',
    name: 'Antonio Moreno',
    date: '11/05/2015',
    role: 'Publisher',
    status: 'Suspended',
  },
  {
    id: 4,
    avatar: '4.jpg',
    name: 'Mary Saveley',
    date: '06/09/2016',
    role: 'Reviewer',
    status: 'Active',
  },
  {
    id: 5,
    avatar: '5.jpg',
    name: 'Martin Sommer',
    date: '12/08/2017',
    role: 'Moderator',
    status: 'Inactive',
  },
]

export default function Table() {
  return (
    <div className='container w-75 m-auto'>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <a href={`/profile/${row.id}`} className='user-link'>
                  <img
                    src={`https://www.tutorialrepublic.com/examples/images/avatar/${row.avatar}`}
                    className='avatar'
                    alt='Avatar'
                  />
                  {row.name}
                </a>
              </td>
              <td>{row.date}</td>
              <td>{row.role}</td>
              <td>
                <span
                  className={`status text-${
                    row.status === 'Active'
                      ? 'success'
                      : row.status === 'Suspended'
                      ? 'danger'
                      : 'warning'
                  }`}
                >
                  •
                </span>{' '}
                {row.status}
              </td>
              <td>
                <button className='action-button settings' title='Settings'>
                  <i className='material-icons text-warning'>settings</i>
                </button>
                <button className='action-button delete' title='Delete'>
                  <i className='material-icons text-danger'>delete</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
