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

router.get('/:eventId', getEvent);

router.get('/', allEvents);

module.exports = router;
