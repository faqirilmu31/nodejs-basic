const server = new Server({
    host: ProcessingInstruction.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
})