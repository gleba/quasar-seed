import { vi } from 'avuef/sens'
import QBtn from 'quasar/src/components/btn/QBtn'
import { buildThing } from '~/thinks/build.thing'


function Click() {
  buildThing.someVar('var' + Date.now())
}

export function Fx() {

  return <div>
    <h1>TSX</h1>
    <div>version : {vi.build.version}</div>
    <div>someVar : {vi.build.someVar}</div>
    <p>
    <QBtn onclick={Click} label="change"/>
    </p>
  </div>
}

export default Fx
