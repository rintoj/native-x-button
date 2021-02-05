import { COLOR, THEME, ThemeProvider } from 'native-x-theme'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button } from './button'

const Spacer = () => <View style={{ padding: 8 }} />

export const THEMES = {
  [THEME.DARK]: {
    [COLOR.PRIMARY]: '#212121',
    [COLOR.SECONDARY]: '#FFFFFF',
    [COLOR.TERTIARY]: '#F3E8C0',
    [COLOR.ACCENT]: '#71F28F',
    [COLOR.DIVIDER]: '#707070',
    [COLOR.DISABLED]: '#252525',
    [COLOR.SUCCESS]: '#63D471',
    [COLOR.ERROR]: '#ED2733',
    [COLOR.WARNING]: '#F9D101',
    [COLOR.TRANSPARENT]: 'transparent',
  },
}

export function ButtonTest() {
  return (
    <ThemeProvider theme={THEME.DARK} themes={THEMES}>
      <View style={[{ flex: 1, alignItems: 'center', backgroundColor: 'black', padding: 32 }]}>
        <ScrollView>
          <View style={[{ flex: 1, alignItems: 'center' }]}>
            <Spacer />
            <Button size='x-large'>Click Me</Button>
            <Spacer />
            <Button size='large'>Click Me</Button>
            <Spacer />
            <Button>Click Me</Button>
            <Spacer />
            <Button size='small'>Click Me</Button>
            <Spacer />
            <Button size='x-small'>Click Me</Button>
            <Spacer />
            <Button loading size='x-large'>
              Click Me
            </Button>
            <Spacer />
            <Button loading size='large'>
              Click Me
            </Button>
            <Spacer />
            <Button loading size='normal'>
              Click Me
            </Button>
            <Spacer />
            <Button loading size='small'>
              Click Me
            </Button>
            <Spacer />
            <Button loading size='x-small'>
              Click Me
            </Button>
            <Spacer />
            <Button rounded>Click Me</Button>
            <Spacer />
            <Button rounded loading size='x-large'>
              Click Me
            </Button>
            <Spacer />
            <Button rounded loading size='large'>
              Click Me
            </Button>
            <Spacer />
            <Button rounded loading size='normal'>
              Click Me
            </Button>
            <Spacer />
            <Button rounded loading size='small'>
              Click Me
            </Button>
            <Spacer />
            <Button rounded loading size='x-small'>
              Click Me
            </Button>
            <Spacer />
            <Button outline>Click Me</Button>
            <Spacer />
            <Button outline loading>
              Click Me
            </Button>
            <Spacer />
            <Button rounded outline>
              Click Me
            </Button>
            <Spacer />
            <Button rounded outline loading>
              Click Me
            </Button>
            <Spacer />
            <Button clear>Click Me</Button>
            <Spacer />
            <Button clear loading>
              Click Me
            </Button>
            <Spacer />
            <Button backgroundColor={COLOR.TERTIARY}>Click Me</Button>
            <Spacer />
            <Button rounded backgroundColor={COLOR.ERROR} textColor={COLOR.SECONDARY}>
              Click Me
            </Button>
            <Spacer />
            <Button rounded outline textColor={COLOR.WARNING}>
              Click Me
            </Button>
            <Spacer />
            <Button width={200}>Click Me</Button>
            <Spacer />
            <Button rounded clear textColor={COLOR.WARNING}>
              Click Me
            </Button>
            <Spacer />
            <Button disabled>Disabled</Button>
            <Spacer />
            <Button rounded disabled>
              Disabled
            </Button>
            <Spacer />
            <Button rounded outline disabled>
              Disabled
            </Button>
            <Spacer />
            <Button rounded clear disabled>
              Disabled
            </Button>
            <Spacer />
          </View>
        </ScrollView>
      </View>
    </ThemeProvider>
  )
}
