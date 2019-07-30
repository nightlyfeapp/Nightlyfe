/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const Event = require('../models/Event');
const User = require('../models/User');

// Create new Event
const newEvent = async (req, res) => {
  // Create instance of new event
  const event = await new Event();

  // Get input data apply it to event model
  event.title = req.body.title;
  event.timeOfEvent = req.body.timeOfEvent;
  event.location = req.body.location;
  event.description = req.body.description;
  event.createdBy = req.user.subject;

  // Save event
  await event
    .save()
    //  Find user
    .then(() => User.findById(req.user.subject._id))
    .catch((err) => {
      console.log(err);
      res.send(err);
    })
    // Associate event with user
    .then((user) => {
      user.eventsCreated.push(event);
      user.save();
      console.log(user);
      res.json({ event });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

// Gets an Event
const getEvent = async (req, res) => {
  await Event.findById(req.params.eventId).then((event) => {
    console.log('Event Found');
    return res.json({ event }).status(200);
  });
};

// Gets all Events
const allEvents = async (req, res) => {
  await Event.find({}).then((events) => {
    console.log('Events Found');
    return res.json({ events }).status(200);
  });
};

// Updates an Event
const updateEvent = async (req, res) => {
  await Event.findByIdAndUpdate(req.params.eventId, req.body, {
    new: true,
    useFindAndModify: false,
  }).then((event) => {
    console.log('Event updated');
    return res.json(event).status(200);
  });
};

// Deletes an Event
const deleteEvent = async (req, res) => {
  Event.findByIdAndDelete(req.params.eventId).then((event) => {
    console.log('Event Deleted');
    return res.json(`Deleted Event: ${event}`);
  });
};

module.exports = {
  newEvent,
  getEvent,
  allEvents,
  updateEvent,
  deleteEvent,
};
