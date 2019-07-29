const express = require('express');
const router = express.Router();

const {
  newEvent,
  getEvent,
  allEvents,
  updateEvent,
  deleteEvent
} = require('../../controllers/events');

router.post('/new', newEvent);

router
  .route('/:eventId')
  .get(getEvent)
  .put(updateEvent);

router.get('/', allEvents);

module.exports = router;
