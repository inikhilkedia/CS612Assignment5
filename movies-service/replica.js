rs.initiate()
rs.conf(
{
	_id: 'rs1',members: [
 {_id: 0, host: 'manager1:27017'}
 {_id: 1, host: 'worker1:27017'}
 {_id: 2, host: 'worker2:27017'}
 ]
}
	)
	