import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import ZoomUs from 'react-native-zoom-us';
const App = () => {

  useEffect(() => {
    loadFile();
  }, [])

  const loadFile = async () => {
    // initialize minimal
    await ZoomUs.initialize({
      clientKey: 'OOF4e1z4S0mhSt9YzPdE3w',
      clientSecret: 'R9f4f3NO8KdDzpdUOVStOdUIfYnLCD3R',
    });

  }

  const joinMeeting = async() => {
    await ZoomUs.joinMeeting({
      zoomAccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJPT0Y0ZTF6NFMwbWhTdDlZelBkRTN3IiwiYXBwS2V5IjoiT09GNGUxejRTMG1oU3Q5WXpQZEUzdyIsIm1uIjo4NjkwODI4NDg2Nywicm9sZSI6MCwiaWF0IjoxNjk0NDMzMjU1LCJleHAiOjE2OTQ0NDA0NTUsInRva2VuRXhwIjoxNjk0NDQwNDU1fQ.Wgfit37XUN6n3n1tiCHzlIFdB50J7Xv5M6N-DKH0VzY',
      meetingNumber: '86908284867',
      password: 'n9sNha',
      userName: 'Johny',
    }).then((data:any) => {
      console.log("Joined::::", data)
    }).catch((error:any) => console.log("New error:::", error?.reason))
  }

  return (
    <View>
      <Button title="Join Meeting" onPress={joinMeeting} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})