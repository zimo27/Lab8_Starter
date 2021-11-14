# Lab 8 - Starter
- Zimo Peng
1) 1.Within a Github action that runs whenever code is pushed 

- Explanation: We want the tests to be automated, which Github action perfectly accomplishes. Whenever the code is pushed, the code is tested automatically. We can breakdown tests into small affordable pieces.

2) no
   
3) no. The “message” feature involves many individual components, such us writing the message, recording the message, sending the message, and receiving the message. The Unit test cannot test how these individuals interact with each other on a feature level.
   
4) yes. The “max message length” feature is an independent feaure by itself, can be tested on a small scale. 