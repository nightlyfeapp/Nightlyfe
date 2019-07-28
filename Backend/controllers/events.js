const Event = require('../models/Event');

// Create new Event
const newEvent = async (req, res) => {
  // Create instance of new event
  const event = await new Event();

  // Get input data apply it to event model
  event.title = req.body.title;
  event.timeOfEvent = req.body.timeOfEvent;
  event.location = req.body.location;
  event.description = req.body.description;

  // Save event
  event.save().then(event => {
    console.log('Saved Event');
    return res.json({ event });
  });
};

// Gets an Event
const getEvent = async (req, res) => {
  // Code
};

// Gets all Events
const allEvents = async (req, res) => {
  // Code
};

// Updates an Event
const updateEvent = async (req, res) => {
  // Code
};

// Deletes an Event
const deleteEvent = async (req, res) => {
  // Code
};

module.exports = {
  newEvent,
  getEvent,
  allEvents,
  updateEvent,
  deleteEvent
};
