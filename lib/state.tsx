import create from 'zustand'

interface StateInterface {
  mousePos:{
    mouseX: number
    mouseY: number
  },
  setMousePos: Function
  scrollData: number
  setScroll: Function
}

const useStore = create<StateInterface>((set:Function) => ({
  mousePos: {
    mouseX: 0,
    mouseY: 0
  },
  setMousePos: (value:any) => set({ mousePos: value }),
  scrollData: 0,
  setScroll: (value:any) => set({ scrollData: value })
}))

export { useStore }
