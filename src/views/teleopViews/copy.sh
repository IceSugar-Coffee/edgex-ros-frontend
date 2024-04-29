#!/bin/bash
if [ ! -f "TeleopView1.vue" ]; then
    echo "Error miss file1"
    exit 1
fi

#gsed macos专用, linux换sed
cp "TeleopView1.vue" "TeleopView2.vue"
gsed -i 's/device1/device2/g' TeleopView2.vue

cp "TeleopView1.vue" "TeleopView3.vue"
gsed -i 's/device1/device3/g' TeleopView3.vue

echo "File copied"

