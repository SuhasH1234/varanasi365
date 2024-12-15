import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './DescriptionBox.css';

const DescriptionBox = () => {
    const [name, setName] = useState('');
    const [product_name, setProduct_name] = useState('');
    const [ratings, setRatings] = useState('');
    const [comments, setComments] = useState('');
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');
    const [isAddingReview, setIsAddingReview] = useState(false);

    // Fetch reviews from the API
    const fetchReviews = async () => {
        try {
            const response = await axios.get('https://varanasi365.onrender.com/allreviews');
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
            setError('Error fetching reviews');
        }
    };

    // Handle adding a review
    const handleAddReview = async () => {
        if (ratings < 1 || ratings > 5) {
            alert('Rating must be between 1 and 5');
            return;
        }

        try {
            const response = await axios.post('https://varanasi365.onrender.com/createreview', {
                name,
                product_name,
                ratings,
                comments,
            });
            if (response.data.success) {
                alert('Review created successfully');
                setIsAddingReview(false);  // Hide the review form
                fetchReviews();  // Refresh the reviews list
            }
        } catch (error) {
            console.error('Error creating review:', error);
        }
    };

    // Handle removing a review
    const handleRemoveReview = async (id) => {
        try {
            const response = await fetch('https://varanasi365.onrender.com/removereview', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            const result = await response.json();
            if (result.success) {
                await fetchReviews(); // Refresh reviews after deletion
            } else {
                console.error("Failed to remove review:", result.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleCloseReadindView = () => {
        setIsAddingReview(false);
    }

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div className='descriptionbox'>
            <div className="reviews-header">
                <h1>Reviews and Ratings</h1>
                <button className='add-review' type='button' onClick={() => setIsAddingReview(true)}>
                    ADD REVIEW
                </button>
            </div>

            <div className="descriptionbox-description">
                {isAddingReview ? (
                    <>
                        <div className="input-group">
                            <label>Name</label>
                            <input 
                                type='text'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="input-group">
                            <label>Product Name</label>
                            <input 
                                type='text'
                                value={product_name}
                                onChange={e => setProduct_name(e.target.value)}
                                placeholder="Enter your product name"
                            />
                        </div>
                        
                        <div className="input-group">
                            <label>Ratings</label>
                            <input 
                                type='number'
                                value={ratings}
                                onChange={e => setRatings(Math.min(5, Math.max(1, e.target.value)))}
                                placeholder="Rate between 1 and 5"
                                max={5}
                                min={1}
                            />
                        </div>

                        <div className="input-group">
                            <label>Comments</label>
                            <textarea 
                                value={comments}
                                onChange={e => setComments(e.target.value)}
                                placeholder="Enter your comments"
                            />
                        </div>

                        <button className='post-button' onClick={handleAddReview}>
                            POST
                        </button>

                        <CloseOutlinedIcon
                            onClick={() => handleCloseReadindView() }
                            fontSize="medium"
                            style={{ cursor: 'pointer', color: '#d32f2f', position: 'absolute', top: '10px', right: '10px' }}
                        />
                    </>
                ) : null}
            </div>
            
            {/* Display all reviews */}
            <div className="reviews-list">
                {error && <p className="error-message">{error}</p>}
                <div className="reviews-grid">
                    {reviews.map(review => (
                        <div key={review._id} className="review-item">
                            <h3 className="review-name">{review.name}</h3>
                            <h2 className="review-ratings">{review.product_name}</h2>
                            <div className="review-ratings">Rating: {review.ratings} / 5</div>
                            <p className="review-comments">Comments: {review.comments}</p>
                            <CloseOutlinedIcon
                                onClick={() => handleRemoveReview(review.id)}
                                fontSize="medium"
                                style={{ cursor: 'pointer', color: '#d32f2f', position: 'relative', bottom: '80%', left: '95%' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DescriptionBox;
