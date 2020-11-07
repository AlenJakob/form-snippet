export const formDomObj = `
<form id="formSubmit" class="field">
  <label class="label">Full Name</label>
  <div class="control  has-icons-left">
    <input id="fullNameVal" class="input" type="text" placeholder="Text input" value="John Doe">
    <span class="icon is-small is-left">
    <i class="fas fa-user"></i>
  </span>
  </div>
</div>


<div class="field">
  <label class="label">Phone number</label>
  <div class="control has-icons-left has-icons-right">
    <input id="phoneVal" class="input" type="text" placeholder="Text input" value="666-666-666">
    <span class="icon is-small is-left">
      <i class="fas fa-mobile-alt"></i>
    </span>
  </div>

</div>


<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input id="emailVal" class="input" type="email" placeholder="Email input" value="hello@hello.com">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>

</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea id="msgVal" class="textarea" placeholder="Textarea">This is message for tests</textarea>
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>

</form>`;
