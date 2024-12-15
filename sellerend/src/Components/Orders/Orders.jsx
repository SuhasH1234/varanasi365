import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [comments, setComments] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5; // Set orders per page

  useEffect(() => {
    fetch('https://varanasi365.onrender.com/allOrders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUpdateStatus = (orderId, status) => {
    fetch('https://varanasi365.onrender.com/updateOrderStatus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, status, comments }),
    }).then(() => {
      alert('Order status updated!');
      setOrders((prev) =>
        prev.map((order) =>
          order.orderId === orderId ? { ...order, status, comments } : order
        )
      );
    });
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      fetch('https://varanasi365.onrender.com/removeorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert('Order deleted successfully!');
            setOrders((prev) => prev.filter((order) => order.orderId !== orderId));
          } else {
            alert('Failed to delete the order.');
          }
        })
        .catch((error) => console.error('Error deleting order:', error));
    }
  };

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="orders">
      <h1>All Orders</h1>
      <p><h4>Total Orders: {orders.length}</h4></p>
      {orders.length === 0 ? (
        <div className="no-orders-message">No orders found.</div>
      ) : (
        <Paper elevation={3} className="orders-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {currentOrders.map((order) => (
                    <TableRow key={order.orderId}>
                    <TableCell>{order.orderId}</TableCell>
                    <TableCell>
                        {order.cartItems.map((item, index) => (
                        <div key={index}>
                            {item.name}
                        </div>
                        ))}
                    </TableCell>
                    <TableCell>
                        {order.cartItems.map((item, index) => (
                        <div key={index}>{item.quantity}</div>
                        ))}
                    </TableCell>
                    <TableCell>₹{order.totalAmount}</TableCell>
                    <TableCell>{order.paymentMethod}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>
                        <div className="action-buttons">
                        <Button
                            variant="contained"
                            onClick={() => handleUpdateStatus(order.orderId, 'Accepted')}
                            color="primary"
                        >
                            Accept
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => handleUpdateStatus(order.orderId, 'Rejected')}
                            color="secondary"
                        >
                            Reject
                        </Button>
                        </div>
                    </TableCell>
                    <TableCell>
                        <CloseOutlinedIcon
                        onClick={() => handleDeleteOrder(order.orderId)}
                        fontSize="medium"
                        style={{ margin: 'auto', cursor: 'pointer' }}
                        />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>




          </Table>
          {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
        </Paper>
      )}
    </div>
  );
};

export default Orders;
